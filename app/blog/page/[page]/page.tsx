import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { blogContent } from '@/data/content'
import { withExportFallback, PLACEHOLDER_PAGE } from '@/lib/exportParams'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const params = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
  return withExportFallback(params, { page: PLACEHOLDER_PAGE })
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = parseInt(params.page)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (posts.length > 0 && (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber))) {
    return notFound()
  }

  const safePage = isNaN(pageNumber) || pageNumber <= 0 ? 1 : pageNumber
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (safePage - 1),
    POSTS_PER_PAGE * safePage
  )
  const pagination = {
    currentPage: safePage,
    totalPages: Math.max(totalPages, 1),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={blogContent.pageTitle}
    />
  )
}
