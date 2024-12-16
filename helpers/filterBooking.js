module.exports = (query) => {
    
    let filterStatus = [
      {
        name: "Tất cả",
        status: "",
        class: ""
      },
      {
        name: "đã xác nhận",
        status: "confirm",
        class: ""
      },
      {
        name: "đã từ chối",
        status: "reject",
        class: ""
      }
    ];
  
    if(query.status) {
      const index = filterStatus.findIndex(item => item.status == query.status);
      filterStatus[index].class="confirm";
    } else {
      const index = filterStatus.findIndex(item => item.status == "");
      filterStatus[index].class="confirm";
    }
  
    return filterStatus;
  }