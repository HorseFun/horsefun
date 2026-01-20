import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertTriangle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function FlatlandIndex() {
  const [indexValue, setIndexValue] = useState(88.5);
  const [status, setStatus] = useState("High Risk");
  const [message, setMessage] = useState("Trump is typing...");

  // Simulate real-time fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 5;
      setIndexValue((prev) => {
        const newValue = Math.max(0, Math.min(100, prev + change));
        
        // Update status based on value
        if (newValue > 90) {
          setStatus("Critical");
          setMessage("Executive Order Imminent!");
        } else if (newValue > 75) {
          setStatus("High Risk");
          setMessage("Trump is typing...");
        } else if (newValue > 50) {
          setStatus("Unstable");
          setMessage("Golf trip canceled.");
        } else {
          setStatus("Calm?");
          setMessage("Suspiciously quiet.");
        }
        
        return newValue;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Critical": return "bg-red-500 text-white animate-pulse";
      case "High Risk": return "bg-orange-500 text-white";
      case "Unstable": return "bg-yellow-500 text-black";
      default: return "bg-green-500 text-white";
    }
  };

  return (
    <section className="py-8 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-black border border-slate-700 shadow-lg max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Activity className="w-8 h-8 text-amber-400" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    平川指数 (Flatland Index)
                    <Badge variant="outline" className="text-xs border-amber-400 text-amber-400 animate-pulse">LIVE</Badge>
                  </h3>
                  <p className="text-slate-400 text-sm">Policy Risk Monitor</p>
                </div>
              </div>

              {/* Value Display */}
              <div className="flex flex-col items-center">
                <div className="text-4xl font-mono font-black text-white tabular-nums">
                  {indexValue.toFixed(2)}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <TrendingUp className="w-3 h-3 text-red-500" />
                  <span>Volatility: Extreme</span>
                </div>
              </div>

              {/* Status Message */}
              <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                <Badge className={`${getStatusColor(status)} px-3 py-1 text-sm font-bold border-none`}>
                  {status}
                </Badge>
                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-3 py-1.5 rounded-md border border-slate-700">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-sm">{message}</span>
                </div>
              </div>

            </CardContent>
            
            {/* Progress Bar Visual */}
            <div className="h-1 w-full bg-slate-800">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                animate={{ width: `${indexValue}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
