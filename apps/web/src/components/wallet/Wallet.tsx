'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TransactionButtons from './TransactionButtons';
import { SelectWallet } from './SelectWallet';

export function Wallet() {
  return (
    <Tabs defaultValue="ethereum" className="w-[700px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
        <TabsTrigger value="solana">Solana</TabsTrigger>
      </TabsList>
      <TabsContent value="ethereum">
        <Card className="flex flex-col items-center">
          <CardHeader>
            <SelectWallet />
          </CardHeader>
          <CardContent className="space-y-24 text-center">
            <div className="space-y-1 ml-auto w-full">
              <h1 className="text-6xl font-extrabold font-mono">${0.0}</h1>
            </div>
            <div>
              <TransactionButtons />
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="solana">
        <Card className="flex flex-col items-center justify-center">
          <CardHeader>
            <SelectWallet />
          </CardHeader>
          <CardContent className="space-y-24 text-center">
            <div className="space-y-1">
              <h1 className="text-6xl font-extrabold font-mono">${0.0}</h1>
            </div>
            <div>
              <TransactionButtons />
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
