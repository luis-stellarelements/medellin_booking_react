import Link from 'next/link'

/**
 * Renders the NotFound component.
 */
export default function NotFound() {
  return (
    <div className='text-center container py-11 md:py-32'>
      <h2 className=''>404 - Page Not Found</h2>
      <p className=''>
        Sorry, the page you were looking for couldn&apos;t be found. Let&apos;s
        get you back on track.
      </p>
      <Link href='/' className=''>
        Return Home
      </Link>
    </div>
  )
}
