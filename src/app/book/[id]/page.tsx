import style from "./page.module.css";

//props에서 params만 꺼내서 쓰기 위해 파라미터 첫번째와 같이 설정
//params는 Promise 객체임
//함수나 컴포넌트, 혹은 어떤 변수의 값이 "나중에 비동기적으로 도착"할 예정이라면 그 타입은 Promise<T>로 정의
//이 Promise가 나중에 { id: string | string[] }라는 객체 하나를 반환함 -> 이 객체 안에 있는 id라는 키의 값은 문자열(string) 혹은 문자열배열임(string{})
export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${(await params).id}`
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const book = await response.json();

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
