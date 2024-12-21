// button booking status
const buttonsStatus = document.querySelectorAll("[button-status]");
if (buttonsStatus.length > 0) {
    let url = new URL(window.location.href);

    buttonsStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");

            if (status) {
                url.searchParams.set("status", status);
            } else {
                url.searchParams.delete("status");
            }

            window.location.href = url.href;
        });
    });
    
}
// end button booking status


// pagination
const buttonsPagination = document.querySelectorAll("[button-pagination]");
if (buttonsPagination) {
  let url = new URL(window.location.href);
  console.log("being in pagination");

  buttonsPagination.forEach(button => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination");

      url.searchParams.set("page", page);

      window.location.href = url.href;
    })
  })
}
// end pagination


// form search
// const formSearch = document.querySelector("#form-search");
// if(formSearch) {
//     let url = new URL(window.location.href);

//     formSearch.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const keyword = e.target.elements.keyword.value;

//         if(keyword) {
//             url.searchParams.set("keyword", keyword);
//         } else {
//             url.searchParams.delete("keyword");
//         }

//         window.location.href = url.href;
//     });
// }
// end form search

// form search with date
document.addEventListener('DOMContentLoaded', function() {
  const deleteConfirmModal = document.getElementById('deleteConfirmModal');
  const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
  const cancelDeleteBtn = document.querySelector('.btn-secondary');  // Nút "Hủy"

  // Khi modal được mở, lấy booking_id từ button Delete
  deleteConfirmModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;  // Nút "Delete"
    const bookingId = button.getAttribute('data-booking-id'); 
    console.log('book id got is',bookingId); // Lấy booking_id

    // Lưu booking_id để sử dụng khi xác nhận
    confirmDeleteBtn.onclick = async function() {
      console.log('Booking ID to delete:', bookingId);  // Debug log for delete action

      // Gửi yêu cầu DELETE tới API
      try {
        const response = await fetch(`/admin/bookings/delete?bookingId=${bookingId}`, {
          method: 'DELETE',  // Phương thức DELETE
          headers: {
            'Content-Type': 'application/json'// Nếu có CSRF token, bạn cần gửi token này
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete booking');
        }

        const result = await response.json();

        // Đóng modal sau khi xóa thành công
        const modal = bootstrap.Modal.getInstance(deleteConfirmModal); // Lấy instance của modal
        modal.hide();

        // Cập nhật lại giao diện sau khi xóa
        // Có thể thêm mã để tự động reload trang hoặc loại bỏ booking đã xóa khỏi bảng
        location.reload();
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    };
  });

  // Khi nhấn nút "Hủy", đóng modal
  cancelDeleteBtn.addEventListener('click', function() {
    const modal = bootstrap.Modal.getInstance(deleteConfirmModal); // Lấy instance của modal
    modal.hide();  // Đóng modal
  });
});

//end delete item

// edit data
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();  // Ngừng hành động mặc định của form (không reload trang)

    // Lấy giá trị bookingId từ input ẩn trong form
    const bookingId = form.querySelector('input[name="booking_id"]').value;

    // Thu thập dữ liệu từ form
    const formData = new FormData(form);

    // Chuyển FormData thành một đối tượng JSON
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data.bookingId = bookingId;

    try {
      // Gửi yêu cầu cập nhật dữ liệu với fetch API
      const response = await fetch(`/admin/bookings/update`, {
        method: 'POST',  // Phương thức POST
        headers: {
          'Content-Type': 'application/json',  // Gửi dữ liệu dưới dạng JSON
        },
        body: JSON.stringify(data),  // Chuyển dữ liệu thành JSON
      });

      if (response.ok) {
        alert('Booking updated successfully!');
        window.location.href = '/admin/bookings';  // Hoặc điều hướng tới trang nào đó
      } else {
        alert('Error updating booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  });
});
//end edit 

//add data
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('adding-form');
  
  form.addEventListener('submit', async function(event) {
    event.preventDefault();  

    const formData = new FormData(form);
    const data = {};

    // Convert FormData to JSON object
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Validate form data
    if (!data.guest_name || !data.room_id || !data.hotel_id || !data.check_in_date || !data.check_out_date || !data.total_amount || !data.status) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      // Send data as JSON
      const response = await fetch('/admin/bookings/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
        },
        body: JSON.stringify(data),  // Send data as JSON string
      });

      if (response.ok) {
        alert('Thêm booking thành công');
        window.location.href = '/admin/bookings';  // Redirect to the booking list
      } else {
        const result = await response.json();
        alert('Có lỗi xảy ra: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra trong quá trình gửi dữ liệu');
    }
  });
});

//end add data

// cancel button
document.addEventListener('DOMContentLoaded', function() {
  const cancelButton = document.getElementById('cancel-button');
  const form = document.getElementById('adding-form');

  // Khi nút "Hủy" được nhấn, reset form
  cancelButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút (chuyển trang)

    // Reset tất cả các trường nhập liệu và placeholder
    form.reset();
  });
});

// end cancel button



// -------------- code logic for hotel

// delete hotel
document.addEventListener('DOMContentLoaded', function() {
  const deleteButtons = document.querySelectorAll('.delete-btn');  // Chọn tất cả các nút "Delete"
  const alertContainer = document.querySelector('.alert-container');  // Cảnh báo
  const confirmDeleteBtn = document.getElementById('confirm-delete-btn');  // Nút "Xóa"
  const cancelDeleteBtn = document.getElementById('cancel-delete-btn');  // Nút "Hủy"
  let hotelIdToDelete = null;  // Biến để lưu ID khách sạn cần xóa

  // Lặp qua tất cả các nút "Delete"
  deleteButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      hotelIdToDelete = event.target.getAttribute('data-hotel-id');  // Lấy ID khách sạn từ nút "Delete"
      console.log('hotel id to delete:', hotelIdToDelete);

      // Hiển thị thông báo cảnh báo
      alertContainer.style.display = 'block';
    });
  });

  // Xử lý khi nhấn vào "Xóa"
  confirmDeleteBtn.addEventListener('click', async function() {
    if (hotelIdToDelete) {
      try {
        // Gửi yêu cầu xóa khách sạn
        const response = await fetch(`/admin/hotels/delete?hotelId=${hotelIdToDelete}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete hotel');
        }

        const result = await response.json();
        console.log(result.message);

        // Reload trang sau khi xóa
        location.reload();  
      } catch (error) {
        console.error('Error deleting hotel:', error);
      }
    }
  });

  // Xử lý khi nhấn "Hủy"
  cancelDeleteBtn.addEventListener('click', function() {
    // Ẩn thông báo cảnh báo khi nhấn "Hủy"
    alertContainer.style.display = 'none';
  });
});
// end delete hotel

// edit data
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('hotel-form');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();  // Ngừng hành động mặc định của form (không reload trang)

    const hotelId = form.querySelector('input[name="hotel_id"]').value;

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data.hotelId = hotelId;

    try {
      // Gửi yêu cầu cập nhật dữ liệu với fetch API
      const response = await fetch(`/admin/hotels/update`, {
        method: 'POST',  // Phương thức POST
        headers: {
          'Content-Type': 'application/json',  // Gửi dữ liệu dưới dạng JSON
        },
        body: JSON.stringify(data),  // Chuyển dữ liệu thành JSON
      });

      if (response.ok) {
        alert('hotel updated successfully!');
        window.location.href = '/admin/hotels';  // Hoặc điều hướng tới trang nào đó
      } else {
        alert('Error updating hotel. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  });
});
//end edit 


//add data
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('hoteladding-form');
  
  form.addEventListener('submit', async function(event) {
    event.preventDefault();  

    const formData = new FormData(form);
    const data = {};

    // Convert FormData to JSON object
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Validate form data
    if (!data.name || !data.address_id || !data.contact_number || !data.email_address || !data.description) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      // Send data as JSON
      const response = await fetch('/admin/hotels/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
        },
        body: JSON.stringify(data),  // Send data as JSON string
      });

      if (response.ok) {
        alert('Thêm hotel thành công');
        window.location.href = '/admin/hotels';  // Redirect to the booking list
      } else {
        const result = await response.json();
        alert('Có lỗi xảy ra: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra trong quá trình gửi dữ liệu');
    }
  });
});

//end add data

// cancel button
document.addEventListener('DOMContentLoaded', function() {
  const cancelButton = document.getElementById('hotelcancel-button');
  const form = document.getElementById('hoteladding-form');

  // Khi nút "Hủy" được nhấn, reset form
  cancelButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút (chuyển trang)

    // Reset tất cả các trường nhập liệu và placeholder
    form.reset();
  });
});

// end cancel button


// ----------- code logic for room


// delete room
document.addEventListener('DOMContentLoaded', function() {
  const deleteAlertContainer = document.querySelector('.alert-container');
  const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
  const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
  let hotelIdToDelete = null;  // Biến lưu trữ id khách sạn cần xóa

  // Khi nhấn nút "Delete" trên booking
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(function(button) {
    button.addEventListener('click', function(event) {
      hotelIdToDelete = event.target.getAttribute('data-hotel-id'); // Lấy hotel_id
      console.log('hotel id got is', hotelIdToDelete); // Debug log

      // Hiển thị cảnh báo xóa
      deleteAlertContainer.style.display = 'block';
    });
  });

  // Khi nhấn nút "Xóa" trong thông báo
  confirmDeleteBtn.onclick = async function() {
    console.log('hotel ID to delete:', hotelIdToDelete);  // Debug log for delete action

    // Gửi yêu cầu DELETE tới API
    try {
      const response = await fetch(`/admin/hotels/delete?hotelId=${hotelIdToDelete}`, {
        method: 'DELETE',  // Phương thức DELETE
        headers: {
          'Content-Type': 'application/json' // Nếu có CSRF token, bạn cần gửi token này
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete hotel');
      }

      const result = await response.json();

      // Ẩn thông báo sau khi xóa thành công
      deleteAlertContainer.style.display = 'none';

      // Cập nhật lại giao diện sau khi xóa
      // Có thể thêm mã để tự động reload trang hoặc loại bỏ khách sạn đã xóa khỏi danh sách
      location.reload();
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  };

  // Khi nhấn nút "Hủy", ẩn thông báo
  cancelDeleteBtn.addEventListener('click', function() {
    deleteAlertContainer.style.display = 'none'; // Ẩn cảnh báo xóa
  });
});
//end delete item


// edit data
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('room-form');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();  // Ngừng hành động mặc định của form (không reload trang)

    const roomId = form.querySelector('input[name="room_id"]').value;

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data.roomId = roomId;

    try {
      // Gửi yêu cầu cập nhật dữ liệu với fetch API
      const response = await fetch(`/admin/rooms/update`, {
        method: 'POST',  // Phương thức POST
        headers: {
          'Content-Type': 'application/json',  // Gửi dữ liệu dưới dạng JSON
        },
        body: JSON.stringify(data),  // Chuyển dữ liệu thành JSON
      });

      if (response.ok) {
        alert('room updated successfully!');
        window.location.href = '/admin/rooms';  // Hoặc điều hướng tới trang nào đó
      } else {
        alert('Error updating room. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  });
});
//end edit 

//add data
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('roomadding-form');
  
  form.addEventListener('submit', async function(event) {
    event.preventDefault();  

    const formData = new FormData(form);
    const data = {};

    // Convert FormData to JSON object
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Validate form data
    if (!data.hotel_id || !data.room_type || !data.room_number || !data.capacity || !data.thumbnail || !data.status) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      // Send data as JSON
      const response = await fetch('/admin/rooms/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
        },
        body: JSON.stringify(data),  // Send data as JSON string
      });

      if (response.ok) {
        alert('Thêm room thành công');
        window.location.href = '/admin/rooms';  // Redirect to the booking list
      } else {
        const result = await response.json();
        alert('Có lỗi xảy ra: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra trong quá trình gửi dữ liệu');
    }
  });
});

//end add data

// cancel button
document.addEventListener('DOMContentLoaded', function() {
  const cancelButton = document.getElementById('roomcancel-button');
  const form = document.getElementById('roomadding-form');

  // Khi nút "Hủy" được nhấn, reset form
  cancelButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút (chuyển trang)

    // Reset tất cả các trường nhập liệu và placeholder
    form.reset();
  });
});

// end cancel button



// ------------------ code logic for statistic
//--1

document.getElementById('query1').addEventListener('submit', async function(event) {
  event.preventDefault(); 

  const roomType = document.getElementById('room_type').value;

  if (roomType) {
    console.log('Đã chọn loại phòng:', roomType);
    try {
      // Gửi dữ liệu qua GET request với query string
      const response = await fetch(`/admin/statistics/query1?roomType=${roomType}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',  // Set content type to JSON
        }
      });

      if (response.ok) {
        const result = await response.json();
  
        console.log('Dữ liệu:', result);

        // Hiển thị kết quả lên giao diện người dùng
        displayResults(result);
      } else {
        const result = await response.json();
        alert('Có lỗi xảy ra: ' + result.message);
      }
    } catch (error) {
      console.error('Lỗi:', error);
      alert('Có lỗi xảy ra trong quá trình gửi dữ liệu');
    }
  } else {
    console.log('Chưa chọn loại phòng');
  }
});

// Hàm để hiển thị kết quả lên giao diện người dùng
function displayResults(data) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '';  // Clear previous results

  if (data.length === 0) {
    resultContainer.innerHTML = '<p>Không có dữ liệu cho loại phòng này.</p>';
  } else {
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered');
    const thead = table.createTHead();
    const row = thead.insertRow();
    row.insertCell(0).textContent = 'Loại phòng';
    row.insertCell(1).textContent = 'Tổng doanh thu';

    const tbody = table.createTBody();
    data.forEach(item => {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = item.room_type;
      row.insertCell(1).textContent = item.total_revenue;
    });

    resultContainer.appendChild(table);
  }
}

//--2
document.getElementById('query2').addEventListener('submit', async function(event) {
  event.preventDefault();  

  const roomType = document.getElementById('room_type2').value;

  if (roomType) {
      try {
          // Gửi yêu cầu GET đến server với loại phòng được chọn
          const response = await fetch(`/admin/statistics/query2?roomType=${roomType}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          });

          if (response.ok) {
              const data = await response.json();
              // In kết quả trả về vào phần tử #statistics-result
              const resultElement = document.getElementById('statistics-result');
              resultElement.innerHTML = '';  // Clear kết quả cũ

              // Kiểm tra nếu có dữ liệu và in ra
              if (data.length > 0) {
                  const item = data[0]; // Chỉ có một kết quả (tháng cao nhất)
                  const listItem = document.createElement('li');
                  listItem.textContent = `Tháng: ${item.peak_month} - Lượng đặt phòng: ${item.bookings_count}`;
                  resultElement.appendChild(listItem);
              } else {
                  resultElement.innerHTML = '<li>Không có dữ liệu cho loại phòng này!</li>';
              }
          } else {
              alert('Có lỗi xảy ra khi truy vấn dữ liệu.');
          }
      } catch (error) {
          console.error('Lỗi:', error);
          alert('Có lỗi xảy ra trong quá trình gửi yêu cầu.');
      }
  } else {
      alert('Vui lòng chọn loại phòng để cho thống kê số 2.');
  }
});


//--3
document.getElementById('query3').addEventListener('submit', async function(event) {
  event.preventDefault();  // Ngừng hành vi mặc định của form (không reload trang)

  const hotelId = document.getElementById('hotel_id').value;

  if (hotelId) {
      try {
          // Gửi yêu cầu GET đến server với ID khách sạn nhập vào
          const response = await fetch(`/admin/statistics/query3?hotel_id=${hotelId}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          });

          if (response.ok) {
              const data = await response.json();
              // In kết quả trả về vào phần tử #statistics-result
              const resultElement = document.getElementById('statistics3-result');
              resultElement.innerHTML = '';  // Clear kết quả cũ

              // Kiểm tra nếu có dữ liệu và in ra
              if (data.length > 0) {
                  const item = data[0]; // Chỉ có một kết quả (khách sạn duy nhất)
                  const row = document.createElement('tr');

                  // Tạo các ô dữ liệu trong bảng
                  const hotelNameCell = document.createElement('td');
                  hotelNameCell.textContent = item.hotel_name;
                  const bookingsCountCell = document.createElement('td');
                  bookingsCountCell.textContent = item.total_bookings;
                  const revenueCell = document.createElement('td');
                  revenueCell.textContent = item.total_revenue.toLocaleString();

                  // Tạo một dòng bảng
                  row.appendChild(hotelNameCell);
                  row.appendChild(bookingsCountCell);
                  row.appendChild(revenueCell);

                  resultElement.appendChild(row);
              } else {
                  resultElement.innerHTML = '<tr><td colspan="3" class="text-center">Không có dữ liệu cho khách sạn này!</td></tr>';
              }
          } else {
              alert('Có lỗi xảy ra khi truy vấn dữ liệu.');
          }
      } catch (error) {
          console.error('Lỗi:', error);
          alert('Có lỗi xảy ra trong quá trình gửi yêu cầu.');
      }
  } else {
      alert('Vui lòng nhập ID khách sạn.');
  }
});

//--4

document.getElementById('show-btn').addEventListener('click', async function() {
  document.getElementById('content').style.display = 'block';  // Hiển thị phần tử
  document.getElementById('statistics4-result').style.display = 'table-row-group';  // Hiển thị dòng bảng

  const hotelId = 1;  // Ví dụ ID khách sạn, bạn có thể thay đổi nếu cần.

  try {
    const response = await fetch(`/admin/statistics/query4?hotel_id=${hotelId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      const results = await response.json();
      const tbody = document.getElementById('statistics4-result');
      
      // Xóa dữ liệu cũ
      tbody.innerHTML = '';

      if (results && results.length > 0) {
        // Hiển thị dữ liệu
        results.forEach(result => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${result.month}</td>
            <td>${result.year}</td>
            <td>${result.monthly_revenue.toLocaleString()} VND</td>
          `;
          tbody.appendChild(tr);
        });
      } else {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="3">Không có dữ liệu</td>';
        tbody.appendChild(tr);
      }
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

document.getElementById('hide-btn').addEventListener('click', function() {
  document.getElementById('content').style.display = 'none';  // Ẩn phần tử
  document.getElementById('statistics4-result').style.display = 'none';  // Ẩn dòng bảng
});


// --5

document.getElementById('search-btn5').addEventListener('click', async function() {
  // Lấy hotel_id từ ô nhập liệu
  const hotelId = document.getElementById('hotel_id5').value.trim();
  
  if (!hotelId) {
    alert('Vui lòng nhập ID khách sạn');
    return;
  }

  console.log("hotel id for query 5 is ", hotelId);

  // Hiển thị phần tử sau khi tìm kiếm
  document.getElementById('content5').style.display = 'block';  
  document.getElementById('statistics5-result').style.display = 'table-row-group';  


  // Gửi request tới server
  const response = await fetch(`/admin/statistics/query5?hotel_id=${hotelId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Xử lý dữ liệu trả về từ server
  const data = await response.json();
  
  if (data && data.length > 0) {
    // Hiển thị kết quả
    console.log("check1");
    const resultBody = document.getElementById('statistics5-result');
    resultBody.innerHTML = ''; // Xóa dữ liệu cũ
    data.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${result.hotel_name}</td>
        <td>${result.available_rooms}</td>
        <td>${result.total_rooms}</td>
        <td>${result.vacancy_rate} %</td>
      `;
      resultBody.appendChild(row);
    });
  } else {
    // Nếu không có dữ liệu
    const resultBody = document.getElementById('statistics5-result');
    resultBody.innerHTML = '<tr><td colspan="4">Không có dữ liệu</td></tr>';
  }
});

document.getElementById('show-btn5').addEventListener('click', function() {
  document.getElementById('content5').style.display = 'block';
  document.getElementById('statistics5-result').style.display = 'table-row-group';
});

document.getElementById('hide-btn5').addEventListener('click', function() {
  document.getElementById('content5').style.display = 'none';
  document.getElementById('statistics5-result').style.display = 'none';
});
