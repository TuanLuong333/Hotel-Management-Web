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
        const response = await fetch(`http://localhost:5000/admin/bookings/delete?bookingId=${bookingId}`, {
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
  const deleteConfirmModal = document.getElementById('deleteConfirmModal');
  const confirmDeleteBtn = document.getElementById('hotelconfirmDeleteBtn');
  const cancelDeleteBtn = document.querySelector('.btn-secondary');  // Nút "Hủy"

  // Khi modal được mở, lấy booking_id từ button Delete
  deleteConfirmModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;  // Nút "Delete"
    const hotelId = button.getAttribute('data-hotel-id'); 
    console.log('hotel id got is',hotelId); // Lấy booking_id

    // Lưu booking_id để sử dụng khi xác nhận
    confirmDeleteBtn.onclick = async function() {
      console.log('hotel ID to delete:', hotelId);  // Debug log for delete action

      // Gửi yêu cầu DELETE tới API
      try {
        const response = await fetch(`http://localhost:5000/admin/hotels/delete?hotelId=${hotelId}`, {
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
  const deleteConfirmModal = document.getElementById('deleteConfirmModal');
  const confirmDeleteBtn = document.getElementById('roomconfirmDeleteBtn');
  const cancelDeleteBtn = document.querySelector('.btn-secondary');  // Nút "Hủy"

  // Khi modal được mở, lấy booking_id từ button Delete
  deleteConfirmModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;  // Nút "Delete"
    const roomId = button.getAttribute('data-room-id'); 
    console.log('room id got is',roomId); // Lấy booking_id

    // Lưu booking_id để sử dụng khi xác nhận
    confirmDeleteBtn.onclick = async function() {
      console.log('room ID to delete:', roomId);  // Debug log for delete action

      // Gửi yêu cầu DELETE tới API
      try {
        const response = await fetch(`http://localhost:5000/admin/rooms/delete?roomId=${roomId}`, {
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