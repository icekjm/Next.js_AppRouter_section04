import './globals.css';
import Link from 'next/link';
import style from './layout.module.css';

export default function RootLayout({
    children,
}: Readonly<{
    //Readonly 읽기전용객체, Readonly<T> 에서<T>에 넘기는 타입은 항상객체라 중괄호 필수
    children: React.ReactNode; //렌더링 가능한 모든 React자식 요소
}>) {
    return (
        <html lang="en">
            <body>
                <div className={style.container}>
                    <header>
                        <Link href={'/'}>📚 ONEBITE BOOKS</Link>
                    </header>
                    <main>{children}</main>
                    <footer>제작 @winterlood</footer>
                </div>
            </body>
        </html>
    );
}
