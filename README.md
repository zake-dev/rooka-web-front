# rooka, 공군 훈련병 인터넷 편지 전달 서비스

❓ Problem : 공군 훈련소로 **인터넷 편지**를 보내보신 적이 있나요? 공군에 입대한 친구, 가족이 있는 지인분들이나 입대를 준비하는 예비훈련병이라면 기존 인터넷 편지 작성하는 법이 매우 까다롭다는 걸 알 거에요. 공군 카페를 통해 개인정보 인증하고, 훈련병의 생년월일을 알아야 보낼 수 있고, 그마저도 열심히 작성하다 예기치 못한 오류로 홈페이가 닫혀버리면 작성한 편지가 모두 날아가게 되버리는 불편함... _이걸 해결할 수 없을까요?_ 😮

‼ Idea : 보내고 싶은 훈련병을 쉽게 찾을 수 있고 더 안정적인 서비스를 제공하는 웹사이트가 있으면 좋을 것 같아요! 🤔

💯 Solution : `rooka` 서비스를 이용하면 복잡한 절차대신 **훈련병 링크**를 발급받아 쉽게 인터넷 편지를 작성할 수 있어요! 😁

## 웹사이트 rooka.kr (서비스 종료)

<sup>_2022.08.20 부로 서비스가 종료되어 사이트 접속이 불가능합니다.<br />아래는 데모 서비스 당시 화면입니다._</sup>

<p float="left">
  <img src="./screenshots/랜딩페이지1.png" width="250" height="500" />
  <img src="./screenshots/랜딩페이지2.png" width="250" height="500" />
  <img src="./screenshots/랜딩페이지3.png" width="250" height="500" />
  <img src="./screenshots/폼4.png" width="250" height="500" />
  <img src="./screenshots/인편함1.png" width="250" height="500" />
  <img src="./screenshots/전달된인편.png" width="250" height="500" />
</p>

## 주요기능

- **모바일 환경 대응**: 기존의 공군 카페와 달리 스마트폰으로 빠르고 쉽게 인터넷 편지를 보내기 위해 모바일 웹페이지로 서비스를 제공. (추후 PC 대응 예정이었으나 서비스 종료로 지원하지 못함)
- **인편함 링크 발급**: 훈련병의 생년월일, 이름, 입대일을 선택하면 `rooka.kr/김루카.1234` 형태로 인터넷 편지함에 접근할 수 있는 링크를 발급.
- **SNS 공유**: 발급된 `링크 이미지`와 자동으로 생성된 안내문구를 `카카오톡`, `페이스북`, `인스타그램`에 공유 가능. 지인에게 부탁해 복잡한 인터넷 편지 작성 절차를 알리게 하는 `인편지기`의 일을 간소화하는 것이 목표.
- **인편함 조회**: 발급받은 링크를 통해 접근 가능. 현재 훈련병에게 `전달대기`, `전달완료`, `전달실패`한 인터넷 편지가 날짜순으로 보여짐.
- **편지 작성 및 다시보기**: 편지를 작성하면 `전달대기`상태로 등록되고 추후 훈련소에서 전달완료된 것으로 파악되면 `전달완료`로 상태 변경. 작성된 인터넷 편지는 다시 열람 가능.
- **비밀번호로 편지내용 보호**: 기존 인터넷편지 시스템과 동일하게 모든 사용자가 다른 사람이 전달한 인터넷 편지의 제목 및 작성자를 확인할 수 있지만 전체 내용을 확인하려면 작성자가 등록한 비밀번호를 입력해야 함.
- **기간제한 및 안내**: 훈련병이 입소한지 2주차가 되기 전에는 인터넷 편지를 보낼 수 없고, 마감된 후에는 현재까지 전달된 편지만 확인 가능.

## 프로젝트 개발 기간

- 기획 및 MVP 개발: 2021.09.15 ~ 2022.02.13
- 운영 및 유지보수: 2022.02.13 ~ 2022.08.20

## 팀원

- **이정환** (@zake-dev): Frontend Developer
- **안동훈** (@sunovivid): Project Leader, Backend Developer
- **권현우** (@holenet): Backend Developer
- _비공개_: Project Manager
- _비공개_: Brand Designer
- _비공개_: Product UI/UX Designer

## 기술 스택

- Front: Vue, Vuex, Scss, Webpack
- Backend: Java Spring Boot, JPA, PostgreSQL, AWS(EC2)

## 프로젝트 회고

### 이정환 (@zake-dev), Frontend Developer

- 군복무 중 일과시간 이후 팀원들과 모여 짬짬이 만든 프로젝트입니다. 사지방의 열악한 개발환경에서 만들다보니 작업기간이 길어져 스트레스를 많이 받았지만, 실제 운영하면서 나오는 사용자들의 반응에 뿌듯함을 느끼고 계속 서비스할 수 있었습니다.
- 다만 이후에 훈련소에 부분적으로나마 스마트폰을 들고 들어갈 수 있게 되면서 서비스의 의미가 많이 퇴색되었습니다. 서비스의 필요성이 떨어지는 데 비해 계속해서 지출되는 운영비용을 감당하기 어려워 서비스를 종료하였습니다.
- 초기에 기술스택을 선정할 때 모바일 앱 이식성을 고려해 `React`를 고를지 사용중이던 `Vue`를 선택할지 고민이 많았습니다. 아무래도 짧은 시간 안에 서비스 결과물을 내야하고, 모바일 이식이 필요하면 이후 마이그레이션을 하면 된다고 보아 `Vue`로 서비스를 구현하기로 결정했었습니다. 하지만 상대적으로 `Vue` 커뮤니티가 작고 `Vue2 -> Vue3`로 메이저 버전이 변경된지 얼마되지 않아 문제가 발생할 때 자료를 찾는 게 조금 어려웠습니다. 이후에 기술스택을 선정할 때에는 커뮤니티 사이즈도 같이 고려해야 한다는 점을 배웠습니다.
- 지금 돌아보면 미숙하고 부끄러운 코드라인이 많이 보입니다. 다음 프로젝트는 컴포넌틑 결합도에 대해 더 고민해보고, 테스트 코드도 도입하는 등 더 유지보수하기 좋은 코드를 짜고 싶습니다.
- 7개월 정도 서비스를 운영하면서 생각보다 많은 분들이 서비스를 이용해주셔서 너무 신기했습니다. 앞으로도 무언가 불편함이 생겼을 때 불만으로 끝내지 않고 편리함으로 바꿔주는 서비스를 많이 만들어보고 싶습니다.
