
//register

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    
document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Ngăn form gửi đi theo cách mặc định

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("fullName").value;

    try {
        const response = await fetch("/author/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                username,
                password,
                fullName,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "/author/login";
            alert(data.msg);
        } else {
            alert(`Error: ${data.msg}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    }
});
}

//end register


// //login
const LoginForm = document.querySelector("#Loginform-search");
if(LoginForm) {
    LoginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Ngăn form gửi đi theo cách mặc định
    
    
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        try {
            const response = await fetch("/author/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            console.log("start take data");
            const data = await response.json();
            console.log("finish take data");
    
            if (response.ok) {
                alert(data.msg); // Hiển thị thông báo đăng nhập thành công
                localStorage.setItem("user", JSON.stringify(data.user));
                window.location.href = "/";
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


const customerButton = document.getElementById('customerButton');
const adminButton = document.getElementById('adminButton');
const fingerCustomer = document.getElementById('fingerCustomer');
const fingerAdmin = document.getElementById('fingerAdmin');

// Sự kiện di chuột vào nút Customer
customerButton.addEventListener('mouseover', function(event) {
    const buttonRect = event.target.getBoundingClientRect();
    fingerCustomer.style.display = 'block'; // Hiển thị hình ảnh ngón tay
    fingerCustomer.style.left = `${buttonRect.left + (buttonRect.width / 2) - (fingerCustomer.width / 2)}px`; // Căn giữa hình ảnh theo chiều ngang
    fingerCustomer.style.top = `${buttonRect.bottom + 10}px`; // Đặt hình ảnh dưới nút với khoảng cách 10px
});

// Sự kiện di chuột vào nút Admin
adminButton.addEventListener('mouseover', function(event) {
    const buttonRect = event.target.getBoundingClientRect();
    fingerAdmin.style.display = 'block'; // Hiển thị hình ảnh ngón tay
    fingerAdmin.style.left = `${buttonRect.left + (buttonRect.width / 2) - (fingerAdmin.width / 2)}px`; // Căn giữa hình ảnh theo chiều ngang
    fingerAdmin.style.top = `${buttonRect.bottom + 10}px`; // Đặt hình ảnh dưới nút với khoảng cách 10px
});

// Sự kiện khi di chuột ra khỏi nút (ẩn hình ảnh ngón tay)
customerButton.addEventListener('mouseout', function() {
    fingerCustomer.style.display = 'none'; // Ẩn hình ảnh ngón tay
});

adminButton.addEventListener('mouseout', function() {
    fingerAdmin.style.display = 'none'; // Ẩn hình ảnh ngón tay
});