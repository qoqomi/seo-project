# 프로젝트 개요
- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

# 메타태그 및 오픈 그래프 태그, 트위터태그 세팅
<img width="241" alt="스크린샷 2024-04-04 오전 9 17 54" src="https://github.com/qoqomi/seo-project/assets/99249544/c1d47552-64a2-4a75-addf-696af3302098">

## 개발환경 세팅
```
yarn dev
```
## Favicon 세팅
### 각 파일의 역할
- favicon.icon
   - 주소 표시줄에서 사이트 URL 옆에 표시되는 아이콘 파일 
- android.icon
   - android 앱 아이콘, 어플리케이션을 실행하기 위해 누르는 이미지이며 해상도에 따른 여러 크기 지원 (태블릿 포함)
- apple.icon
   - apple 앱 아이콘, 어플리케이션을 실행하기 위해 누르는 이미지이며 해상도에 따른 여러 크기 지원(태플릿 포함)
- ms-icon
   - Microsoft 아이콘 지원 
- browserconfig.xml
   - Window 8 이상의 버전에서 Internet Explorer 11로 접속하는 경우(IE 10 이하 버전 해당되지 않음) 클라이언트가 요청하는 browser configuration file
- manifest.json
   - 웹 애플리케이션의 정보를 JSON 텍스트파일로 제공해서 웹,앱 다운로드를 네이티브 앱과 유사한 형태로 제공할 수 있도록 도와주는 파일
   - 이름, 저작자, 아이콘, 버전 등이 들어간다. 


## SEO 스코어 분석
- 스코어 분석에 사용한 서비스:  [seobility](https://www.seobility.net/en/) 

사이트를 이용하여 성능 측정
### 개선점
#### 1. 메타 사양
메타사양에서는 72%를 달성하였다. 제일 문제가 있는 부분은 (예상했던대로) 링크였는데 
현재 타브랜드를 클론하여 배포하였기 때문에 해당 사이트와 동일한 링크를 사용할 수 없었다. 

[](https://velog.velcdn.com/images/energyy044/post/2f90babb-7b66-4323-9405-7020096a24a8/image.png)



#### 2. 페이지 품질
- 메타 태그 관련된 프로젝트로 인해 5글자만 넣고 배포하였기 때문에 아래와 같은 권고가 났다.
250개 단어 이상으로 올려보자 
![](https://velog.velcdn.com/images/energyy044/post/960b730a-41a1-4f5f-b43f-f66dec597839/image.png)


#### 3. 링크  구조
- 링크를 거의 찾을 수 없다. 페이지의 입력 페이지인 것 같다 라는 메세지가 났다. 
- 사실 이런 부분들까지도 영향을 미치는지에 대해 처음 알았다. 
![](https://velog.velcdn.com/images/energyy044/post/f62462e9-7654-4ab7-9cbf-f9c2f80b5130/image.png)


### 추가적인 정보

- 이 외에도 모바일사이즈에 viewport나 javascript파일의 로드 개수, image seo,소셜 네트워크 추가적으로 필요한 markup,https 등 다양한 정보를 나타낸다. 

- 제일 하위에는 가장 중요한 키워드 최적화도 알려주는 keyword Checker도 있으니 활용해보면 좋을 것 같다. 

### 알게된 인사이트
- 메타태그로 인해 시작했던 건데 page quality와 link structure도 사이트의 seo에 영향을 미친다는 사실을 알게 되었다.
심지어 page quality내부에서는 콘텐츠 내용에 대해서도 판단하고 이루어진다고 한다. 

- 아무래도 내부 프로젝트를 진행한 상태가 아니라서 기본적인 부분(사이트 내부 글자수나 서버 연동 정도 등)이 SEO에 영향을 미친다는 사실을 새롭게 알게 되었다. (기본적인 부분들을 충족시키고 나서 다시 측정하려고 하였지만 이거 유료다🥲)
