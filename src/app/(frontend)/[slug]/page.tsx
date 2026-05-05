import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import config from '@/payload.config'

export async function generateStaticParams() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  
  const { docs: pages } = await payload.find({
    collection: 'pages',
    limit: 100,
  })

  return pages.map((page: any) => ({
    slug: page.slug,
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const page = docs[0]

  if (!page) {
    notFound()
  }

  // Serialize rich text content
  const renderRichText = (content: any) => {
    if (!content) return null
    
    return content.root?.children?.map((node: any, index: number) => {
      if (node.type === 'paragraph') {
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {node.children?.map((child: any, childIndex: number) => {
              if (child.bold) {
                return <strong key={childIndex} className="font-semibold text-gray-900">{child.text}</strong>
              }
              if (child.italic) {
                return <em key={childIndex}>{child.text}</em>
              }
              return <span key={childIndex}>{child.text}</span>
            })}
          </p>
        )
      }
      if (node.type === 'heading') {
        const className = node.tag === 'h2' 
          ? 'text-3xl font-bold text-gray-900 mb-6 mt-8'
          : 'text-2xl font-bold text-gray-900 mb-4 mt-6'
        const text = node.children?.map((child: any) => child.text).join('')
        
        if (node.tag === 'h2') {
          return <h2 key={index} className={className}>{text}</h2>
        } else if (node.tag === 'h3') {
          return <h3 key={index} className={className}>{text}</h3>
        } else if (node.tag === 'h4') {
          return <h4 key={index} className={className}>{text}</h4>
        }
      }
      if (node.type === 'list') {
        const ListTag = node.tag as 'ul' | 'ol'
        return (
          <ListTag key={index} className="mb-6 ml-6 space-y-2">
            {node.children?.map((listItem: any, liIndex: number) => (
              <li key={liIndex} className="text-gray-700 leading-relaxed">
                {listItem.children?.map((child: any) => child.text).join('')}
              </li>
            ))}
          </ListTag>
        )
      }
      return null
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-800 to-orange-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {page.icon && <div className="text-7xl mb-6">{page.icon}</div>}
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {page.title}
          </h1>
          {page.excerpt && (
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              {page.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {renderRichText(page.content)}
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-semibold text-lg"
            >
              ← Takaisin etusivulle
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Kirjoituskonekauppa, Pärnänen & Pojat
          </p>
        </div>
      </footer>
    </div>
  )
}
