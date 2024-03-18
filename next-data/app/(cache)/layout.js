// import Link from 'next/link'

// export const dynamic = 'force-dynamic'

// export default function CacheLayout({
//   children,
// }) {
//   return (
//     <section className="p-5">
//         <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
//           <a href="/about">About</a>
//           <a href="/settings">Settings</a>
//         </nav>
//       {children}
//     </section>
//   )
// }

'use client'

import { useRouter } from 'next/navigation'

export default function CacheLayout({
  children,
}) {
  const router = useRouter()
  return (
    <section className="p-5">
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <button onClick={() => {
            router.push('/about')
            router.refresh()
          }}>About</button>
          <button onClick={() => {
            router.push('/settings')
            router.refresh()
          }}>Settings</button>
        </nav>
      {children}
    </section>
  )
}

