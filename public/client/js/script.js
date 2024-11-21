// button status
// const buttonsStatus = document.querySelectorAll("[button-status]");
// if (buttonsStatus.length > 0) {
//     let url = new URL(window.location.href);

//     buttonsStatus.forEach(button => {
//         button.addEventListener("click", () => {
//             const status = button.getAttribute("button-status");

//             if (status) {
//                 url.searchParams.set("status", status);
//             } else {
//                 url.searchParams.delete("status");
//             }

//             window.location.href = url.href;
//         });
//     });
// }
// end button status


<<<<<<< HEAD
=======

register

document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Ngăn form gửi đi theo cách mặc định

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5000/author/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                username,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "http://localhost:5000";
            alert(data.msg);
        } else {
            alert(`Error: ${data.msg}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    }
});

//end register


// //login
const LoginForm = document.querySelector("#Loginform-search");
if(LoginForm) {
    LoginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Ngăn form gửi đi theo cách mặc định
    
    
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        try {
            const response = await fetch("http://localhost:5000/author/login", { // Đảm bảo đúng URL của route
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert(data.msg); // Hiển thị thông báo đăng nhập thành công
                localStorage.setItem("user", JSON.stringify(data.user));
                window.location.href = "http://localhost:5000";
            } else {
                alert(`Error: ${data.msg}`); // Hiển thị lỗi nếu có
            }
    
        } catch (error) {
            console.error("Error:", error);
            alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.");
        }
    });
 }

//end login

>>>>>>> 1c6f5cc (admin/dashboard - rooms)
// form search
const formSearch = document.querySelector("#form-search");
if(formSearch) {
    let url = new URL(window.location.href);

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
<<<<<<< HEAD
        const location = e.target.elements.location.value;
        const datetime = e.target.elements.datetime.value;
        const rooms = e.target.elements.rooms.value;
        const guests = e.target.elements.guests.value;

        if(location) {
            url.searchParams.set("location", location);
        } else {
            url.searchParams.delete("location");
        }
        if(datetime) {
            url.searchParams.set("datetime", datetime);
        } else {
            url.searchParams.delete("datetime");
        }
        if(rooms) {
            url.searchParams.set("rooms", rooms);
        } else {
            url.searchParams.delete("rooms");
        }
        if(guests) {
            url.searchParams.set("guests", guests);
        } else {
            url.searchParams.delete("guests");
=======
        const address = e.target.elements.address.value;
        const room_type = e.target.elements.room_type.value;
        const capacity = e.target.elements.capacity.value;

        if(address) {
            url.searchParams.set("address", address);
        } else {
            url.searchParams.delete("address");
        }
        if(room_type) {
            url.searchParams.set("room_type", room_type);
        } else {
            url.searchParams.delete("room_type");
        }
        if(capacity) {
            url.searchParams.set("capacity", capacity);
        } else {
            url.searchParams.delete("capacity");
>>>>>>> 1c6f5cc (admin/dashboard - rooms)
        }

        window.location.href = url.href;
    });
}
<<<<<<< HEAD
// end form search
=======

// end form search


//Pagination

const buttonsPagination = document.querySelectorAll("[button-pagination]");
if (buttonsPagination) {
    let url = new URL(window.location.href);

    buttonsPagination.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");

            url.searchParams.set("page", page);

            window.location.href = url.href;
        })
    })
}
//EndPagination


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
      customer_name: form.customer_name.value,
      customer_email: form.customer_email.value,
      customer_phone: form.customer_phone.value,
      check_in_date: form.check_in_date.value,
      check_out_date: form.check_out_date.value
    };
  
    try {
      const response = await fetch('http://localhost:5000/rooms/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Booking request failed');
    }
      const result = await response.json();
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
>>>>>>> 1c6f5cc (admin/dashboard - rooms)
