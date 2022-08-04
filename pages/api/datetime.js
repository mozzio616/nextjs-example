export default function handler(req, res) {
    const resp = () => {
        const date = new Date();
        const resp = {
            datetime: date.getFullYear()
                    + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
                    + '/' + ('0' + date.getDate()).slice(-2)
                    + ' ' + ('0' + date.getHours()).slice(-2)
                    + ':' + ('0' + date.getMinutes()).slice(-2)
                    + ':' + ('0' + date.getSeconds()).slice(-2)
                    + '(JST)'
        };
        res.status(200).json(resp);
    }
    setTimeout(resp, 10000)
}
  