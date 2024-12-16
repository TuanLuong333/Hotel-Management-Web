module.exports = (query) => {
    let objectSearch = {
        keyword: "",
        col: "",
    }

    const urlParams = new URLSearchParams(query);

    if (urlParams.has('keyword')) {
        objectSearch.keyword = urlParams.get('keyword');
    }

    if (urlParams.has('column')) {
        objectSearch.col = urlParams.get('column'); 
    }

    return objectSearch;
}