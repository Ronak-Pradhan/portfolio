import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { notFound } from 'next/navigation'
import { withExportFallback, PLACEHOLDER_TAG, PLACEHOLDER_PAGE } from '@/lib/exportParams'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const params = Object.keys(tagCounts).flatMap((tag) => {
    const postCount = tagCounts[tag]
    const totalPages = Math.max(1, Math.ceil(postCount / POSTS_PER_PAGE))
    return Array.from({ length: totalPages }, (_, i) => ({
      tag: encodeURI(tag),
      page: (i + 1).toString(),
    }))
  })
  return withExportFallback(params, { tag: PLACEHOLDER_TAG, page: PLACEHOLDER_PAGE })
}

export default async function TagPage(props: { params: Promise<{ tag: string; page: string }> }) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const tagCounts = tagData as Record<string, number>
  const title = tagCounts[tag] ? tag[0].toUpperCase() + tag.split(' ').join('-').slice(1) : 'Tags'
  const pageNumber = parseInt(params.page)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  if (
    filteredPosts.length > 0 &&
    (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber))
  ) {
    return notFound()
  }

  const safePage = isNaN(pageNumber) || pageNumber <= 0 ? 1 : pageNumber
  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (safePage - 1),
    POSTS_PER_PAGE * safePage
  )
  const pagination = {
    currentPage: safePage,
    totalPages: Math.max(totalPages, 1),
  }

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={title}
    />
  )
}
