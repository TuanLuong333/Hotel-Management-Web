const formSearch = document.querySelector("#form-search");
if (formSearch) {
  let url = new URL(window.location.href);

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const address = e.target.elements.address.value;
    const room_type = e.target.elements.room_type.value;
    const capacity = e.target.elements.capacity.value;

    if (address) {
      url.searchParams.set("address", address);
    } else {
      url.searchParams.delete("address");
    }
    if (room_type) {
      url.searchParams.set("room_type", room_type);
    } else {
      url.searchParams.delete("room_type");
    }
    if (capacity) {
      url.searchParams.set("capacity", capacity);
    } else {
      url.searchParams.delete("capacity");
    }

    window.location.href = url.href;
  });
}
// end form search

//Pagination
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
//EndPagination

function changeButtonText(button, text) {
  button.textContent = text;
}

function showDetails(button) {
  const roomId = button.getAttribute('data-room-id');
  const overlay = document.getElementById('layoutOverlay');
  const content = overlay.querySelector('.overlay-content');

  // Gửi yêu cầu AJAX để lấy thông tin chi tiết phòng
  fetch(`/rooms/?room_id=${roomId}`)
    .then(response => response.text())
    .then(data => {
      content.innerHTML = data; // Render nội dung chi tiết vào overlay
      overlay.classList.add('active'); // Hiển thị overlay
    })
    .catch(error => {
      console.error('Lỗi khi tải thông tin phòng:', error);
      content.innerHTML = '<div class="content"><p>Lỗi khi tải thông tin phòng.</p></div>';
      overlay.classList.add('active');
    });
}

document.getElementById('layoutOverlay').addEventListener('click', function (event) {
  if (event.target === this) {
    this.classList.remove('active');
  }
});

function bookRoom() {
  // Hiển thị prompt yêu cầu người dùng nhập tên
  var userName = prompt("Please enter your name to book this room:");
}



//booking
function openBookingModal(roomId) {
  document.querySelector('#bookingForm input[name="room_id"]').value = roomId;
  $('#bookingModal').modal('show'); // Use jQuery to show the modal
}
// Submit booking information
async function submitBooking() {
  const form = document.querySelector('#bookingForm');
  const formData = {
    room_id: form.room_id.value,
    guest_name: form.guest_name.value,
    check_in_date: form.check_in_date.value,
    check_out_date: form.check_out_date.value
  };

  try {
    const response = await fetch('http://localhost:3000/rooms/reserve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    console.log("f1");
    if (!response.ok) {
      throw new Error('Booking request failed');
    }
    console.log("f2");
    const result = await response.json();
    console.log("f3");
    if (result.success) {
      alert('Booking successful!');
      $('#bookingModal').modal('hide'); // Close modal on success
    } else {
      alert('Booking failed1. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('mising information or date is not available those days');
  }
}
//end booking