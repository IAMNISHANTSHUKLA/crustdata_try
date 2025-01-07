import { Button } from "@/app/components/ui/button";
interface TitleAndDescriptionProps {
  title: string
  description?: string
}

export function TitleAndDescription({ title, description }: TitleAndDescriptionProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && <p className="text-lg text-muted-foreground mt-2">{description}</p>}
      </div>
      <Button
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={() => window.open('https://jsonhero.io/j/3ZQ16TON5oUV', '_blank')}
      >
        View Document
      </Button>
    </div>
  )
}

