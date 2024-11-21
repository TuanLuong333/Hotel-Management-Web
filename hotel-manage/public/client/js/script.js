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


// form search
const formSearch = document.querySelector("#form-search");
if(formSearch) {
    let url = new URL(window.location.href);

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        const type = e.target.elements.type.value;
        const capacity = e.target.elements.capacity.value;

        if(location) {
            url.searchParams.set("location", location);
        } else {
            url.searchParams.delete("location");
        }
        if(type) {
            url.searchParams.set("type", type);
        } else {
            url.searchParams.delete("type");
        }
        if(capacity) {
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

    buttonsPagination.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");

            url.searchParams.set("page", page);

            window.location.href = url.href;
        })
    })
}
//EndPagination