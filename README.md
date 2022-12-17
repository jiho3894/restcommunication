### [세션 API 명세서 링크](https://useful-jonquil-43d.notion.site/API-354f70e9d74a4363900996ee63dc25fb)

### axios create 활용하기
```javascript
// create를 사용해 기본 주소 세팅 ( 변경 사항이 생겼을때 baseURL만 변경해 다른 부분을
모두 수정할 필요는 없어진다 )
const baseURL = axios.create({
  baseUrl : 데이터를 요청할 기본 주소,
})
```
### [axios create 자료 + env 환경변수 세팅 링크](https://velog.io/@we_in/axios.create%EC%99%80-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%85%8B%ED%8C%85)
### axios interceptor 활용하기
```javascript
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});
```

### [Interceptor 활용법 링크](https://velog.io/@subanggu/axios-interceptor-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)

### [Interceptor 공식문서](https://yamoo9.github.io/axios/guide/interceptors.html)

### [REST한 API](https://meetup.toast.com/posts/92)
