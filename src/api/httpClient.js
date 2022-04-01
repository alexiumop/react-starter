import axios from "axios";

const httpClient = {
    invoke(url, method, body = null) {
        return axios({
            method: method,
            url: url,
            data: body
        });
    },
    getImages() {
        let urlImages = 'https://dog.ceo/api/breeds/image/random';
        return this.invoke(urlImages, 'GET');
    }
}

export default httpClient;
