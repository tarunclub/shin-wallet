import {
  ArrowDownUpIcon,
  CircleArrowDownIcon,
  RectangleVerticalIcon,
  SendHorizonalIcon,
} from 'lucide-react';
import { Button } from '../ui/button';

export default function TransactionButtons() {
  return (
    <div className="flex items-center space-x-12">
      <div className="flex flex-col items-center">
        <Button>
          <SendHorizonalIcon className="h-8 hover:-rotate-45 transition duration-300" />
        </Button>
        Send
      </div>
      <div className="flex flex-col items-center">
        <Button>
          <CircleArrowDownIcon className="h-8" />
        </Button>
        Receive
      </div>
      <div className="flex flex-col items-center">
        <Button>
          <ArrowDownUpIcon className="h-8" />
        </Button>
        Swap
      </div>
    </div>
  );
}
