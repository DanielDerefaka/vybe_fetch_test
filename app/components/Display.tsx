import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';

interface DataDisplayProps {
  tokenData: any;
  token:any
}


const DataDisplay: React.FC<DataDisplayProps> = ({ tokenData }) => {
  // Check if data is not an array or is empty
 

 

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Vybe Api Token Data</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      
      {tokenData.map((token:any) => (
             <Sheet key={token.symbol}>
             <SheetTrigger asChild>
               <Button variant="outline">{token.name}</Button>
             </SheetTrigger>
             <SheetContent>
               <SheetHeader>
                 <SheetTitle>{token.name}</SheetTitle>
                 <SheetDescription>
                   <Image src={`${token.logoUrl}`} alt='tokenimg' height={100}  width={100}/>
                 </SheetDescription>
               </SheetHeader>
               <div className="grid gap-4 py-4">
                 <div className="grid grid-cols-4 items-center gap-4">
                   <Label htmlFor="name" className="text-right">
                     Name
                   </Label>
                   <Input id="name" value={token.name} className="col-span-3" disabled />
                 </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                   <Label htmlFor="username" className="text-right">
                     Symbol
                   </Label>
                   <Input id="username" value={token.symbol} className="col-span-3" disabled />
                 </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                   <Label htmlFor="username" className="text-right">
                     Price
                   </Label>
                   <Input id="username" value={token.price} className="col-span-3" disabled />
                 </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                   <Label htmlFor="username" className="text-right">
                   MintAddress
                   </Label>
                   <Input id="username" value={token.mintAddress} className="col-span-3" disabled />
                 </div>
               </div>
               <SheetFooter>
                 <SheetClose asChild>
                 
                 </SheetClose>
               </SheetFooter>
             </SheetContent>
           </Sheet>
            ))}
      
      



    </div>
  ); 
};

export default DataDisplay;
