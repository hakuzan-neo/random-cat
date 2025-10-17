//import Image from "next/image";
//import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

//APIから画像を取得する関数
export default async function Home() {//asyncキーワードを追加

  //await connection();//ビルド時にfetchImageの結果が固定されないようにする
  const image = await fetchImage();//APIから画像を取得
  //console.log("Home:画像情報を取得しました", image);//画像URLをコンソールに表示
  return <CatImage url={image.url} />;
}
