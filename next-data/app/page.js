// async function getData() {
//   // 接口每次调用都会返回一个随机的猫猫图片数据
//   const res = await fetch('https://api.thecatapi.com/v1/images/search')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

// export default async function Page() {
//   const data = await getData()
  
//   return <img src={data[0].url} width="300" />
// }

// async function getData() {
//   const res = await fetch('https://api.thecatapi.com/v1/images/search', { next: { tags: ['collection'] } })
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

// export default async function Page() {
//   const data = await getData()
  
//   return <img src={data[0].url} width="300" />
// }


// 强制 fetch 不缓存
export const fetchCache = 'force-no-store'

async function getData() {
  // 关闭请求记忆
  const { signal } = new AbortController()
  const res = await fetch('https://api.thecatapi.com/v1/images/search', { signal }) 
  return res.json()
}

export async function generateMetadata() {
  const data = await getData()
  return {
    title: data[0].id
  }
}

export default async function Page() {
  const data = await getData()
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <img src={data[0].url} width="300" />
      <CatDetail />
    </>
  )
}

async function CatDetail() {
  const data = await getData()
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <img src={data[0].url} width="300" />
    </>
  )
}
