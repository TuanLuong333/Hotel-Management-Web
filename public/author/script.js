
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
        const response = await fetch("http://localhost:5000/author/register", {
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
            window.location.href = "http://localhost:5000/author/login";
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
            const response = await fetch("http://localhost:5000/author/login", {
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
