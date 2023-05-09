import request from "@/utils/request";
export function login(data) {
    return request({
        url: "/api/v1/user/login",
        method: "post",
        data
    });
}

export function downloadPdf() {
    return request({
        url: "/download",
        method: "get"
    });
}