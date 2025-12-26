import { Landing } from '@/pages/Landing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  ssr: 'data-only',
})

function RouteComponent() {
  return <Landing />
}
