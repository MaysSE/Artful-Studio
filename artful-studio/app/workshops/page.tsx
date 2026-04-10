import {client} from '@/lib/sanity'

async function getWorkshops() {
  return await client.fetch(`*[_type == "workshop"]{
    _id, title, description, date, price, spotsAvailable
  }`)
}

export default async function WorkshopsPage() {
  const workshops = await getWorkshops()

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Workshops</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workshops.map((w: any) => (
          <div key={w._id} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold">{w.title}</h2>
            <p className="text-gray-600 mt-2">{w.description}</p>
            <p className="mt-4 font-bold">AED {w.price}</p>
            <p className="text-sm text-gray-500">{w.spotsAvailable} spots left</p>
          </div>
        ))}
      </div>
    </main>
  )
}