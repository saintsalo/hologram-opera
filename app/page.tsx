import Button from "@/components/Button"
import Card from "@/components/Card"
import Input from "@/components/Input"
import hgt from "@/assets/images/ht-dgo.jpg"
import hsoh from "@/assets/images/hsoh.png"
import Checkbox from "@/components/Checkbox"
import DropDown from "@/components/DropDown"

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="p-8 flex flex-col flex-wrap gap-8">
        <div>
          <Input placeholder="Enter text here" focusColor="violet" rounded="md" />
        </div>
        <div>
          <Input
            placeholder="Another input"
            focusColor="pink"
            rounded="full"
            className="custom-input-class"
          />
        </div>
      </div>

      <div className="p-8 flex flex-row flex-wrap gap-8 w-full">
        <DropDown
          title="Select an option"
          color="none"
          list={[
            { to: "/path/1", name: "Option 1" },
            { to: "/path/2", name: "Option 2" },
            { to: "/path/3", name: "Option 3" },
            { to: "/path/4", name: "Option 4" },
            { to: "/path/5", name: "Option 5" },
          ]}
        />
      </div>

      <div className="p-8 flex flex-row flex-wrap gap-8 w-full">
        <div className="flex flex-row items-center gap-2">
          <Checkbox color="pink" /> Checkbox 1
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox color="violet" /> Checkbox 1
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox color="pink" /> Checkbox 1
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox color="red" /> Checkbox 1
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox color="orange" /> Checkbox 1
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox color="yellow" /> Checkbox 1
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox color="lime" /> Checkbox 1
        </div>
        <div className="flex flex-row items-center gap-2">
          <Checkbox color="cyan" /> Checkbox 1
        </div>
      </div>

      <div className="p-8 flex flex-row flex-wrap gap-8">
        <div>
          <Button buttonText="Cyan Button" color="cyan" />
        </div>
        <div>
          <Button buttonText="Small Violet Button" color="violet" size="sm" />
        </div>
        <div>
          <Button buttonText="Medium Pink Button" color="pink" size="md" />
        </div>
        <div>
          <Button buttonText="Large Red Button" color="red" size="lg" />
        </div>
        <div>
          <Button buttonText="Rounded Orange Button" color="orange" rounded="md" />
        </div>
        <div>
          <Button buttonText="Full Rounded Yellow Button" color="yellow" rounded="full" />
        </div>
        <div>
          <Button buttonText="Disabled Lime Button" color="lime" disabled />
        </div>
        <div>
          <Button buttonText="Custom Class Cyan Button" color="cyan" className="custom-class" />
        </div>
      </div>

      <div className="w-full bg-red-200 p-8 flex lg:flex-row flex-wrap gap-8">
        <Card
          calllToActionLink="/card"
          image={{ data: hgt, name: "Hello from image" }}
          date="2022-01-01"
          title="Hologram Teen"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Card>
        <Card
          calllToActionLink="/card"
          image={{ data: hsoh, name: "Hello from image" }}
          date="2022-01-01"
          title="Holy Sun Opera House"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Card>
      </div>
    </div>
  )
}
