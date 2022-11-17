export default function request<T = any>(
  url: string,
  config: {
    method: "get" | "post";
    headers: Record<string, string>;
    body?: any;
  }
) {
  return new Promise<T>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(config.method, url);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    for (const key in config.headers) {
      xhr.setRequestHeader(key, config.headers[key]);
    }

    xhr.addEventListener("load", () => {
      const { response, status } = xhr;
      const res = JSON.parse(response);

      if (status >= 200 && status < 400) {
        resolve(res);
      } else {
        reject({ error: res, status });
      }
    });

    if (config.body) {
      xhr.send(JSON.stringify(config.body));
    } else {
      xhr.send();
    }
  });
}
