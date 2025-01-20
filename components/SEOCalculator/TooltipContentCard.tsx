import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface TooltipContentCardsProps {
  cards: { title: string; content: string }[];
}

export const TooltipContentCards: React.FC<TooltipContentCardsProps> = ({ cards }) => (
  <Accordion defaultValue="item-0" type="single" collapsible className="w-[167px] space-y-2">
    {cards.map((card, index) => (
      <AccordionItem key={index} value={`item-${index}`} className="border-none bg-[#F5F8FF] px-4 py-2 rounded">
        <AccordionTrigger className="text-sm font-semibold text-[#030033] p-0 focus:outline-none hover:outline-none bg-[#F5F8FF]">
          {card.title}
        </AccordionTrigger>
        <AccordionContent className="text-xs text-muted-foreground py-2">
          {card.content}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
