/** 
 * revalidate 设置重新渲染的时间 /s 
 * 修改成动态的渲染
*/
// export const revalidate = 10

// export default async function Page() {

//   const url = (await (await fetch('https://api.thecatapi.com/v1/images/search')).json())[0].url

//   return (
//     <img src={url} width="300" alt="cat" />
//   )
// }

/** 动态函数
 * 使用cookies() / headers(): 获取cookie / header
 */
// import { cookies } from 'next/headers'

// export default async function Page() {

//   const cookieStore = cookies()
//   const theme = cookieStore.get('theme')

//   const url = (await (await fetch('https://api.thecatapi.com/v1/images/search')).json())[0].url
  
//   return (
//     <img src={url} width="300" alt="cat" />
//   )
// }


/** 动态函数
 * searchParams: 页面查询参数
 * 设置no cache
 */

export default async function Page({ searchParams }) {
  const url = (await (await fetch('https://api.thecatapi.com/v1/images/search', { cache: 'no-store' })).json())[0].url
  return (
    <>
      <img src={url} width="300" alt="cat" />
      {new Date().toLocaleTimeString()}
      {JSON.stringify(searchParams)}
    </>
  )
}








