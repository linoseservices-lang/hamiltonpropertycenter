import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  type: string;
  image: string;
}

export const PropertyCard = ({ property }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Link to={`/property/${property.id}`}>
        <div className="relative overflow-hidden aspect-[4/3] rounded-custom mb-6">
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="bg-secondary text-primary px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-sm">
              {property.type}
            </div>
            {property.virtualTourUrl && (
              <div className="bg-primary text-white px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-sm border border-white/20 backdrop-blur-md">
                360° Tour
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="bg-white text-primary px-6 py-2 rounded-custom text-xs font-bold uppercase tracking-widest">
              View Details
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-secondary text-xs uppercase tracking-widest">
            <MapPin className="w-3 h-3" /> {property.location}
          </div>
          <h3 className="text-2xl font-primary text-primary group-hover:text-secondary transition-colors">{property.title}</h3>
          <p className="text-secondary font-bold text-lg">{property.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};
