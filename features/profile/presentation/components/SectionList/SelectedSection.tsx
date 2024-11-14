import React from "react";
import {ServiceList} from "@/features/services/presentation/components/ServiceList";
import {Contact} from "@/features/profile/presentation/components/Contact";
import {StaffList} from "@/features/staff/presentation/components/StaffList";
import {ReviewList} from "@/features/reviews/presentation/components/ReviewList";
import {ProductList} from "@/features/products/presentation/components/ProductList";

export const SelectedSection: React.FC = ({selection}) => {
  switch (selection) {
    case 'services': {
      return <ServiceList/>
    }
    case 'staff': {
      return <StaffList/>
    }
    case 'reviews': {
      return <ReviewList/>
    }
    case 'products': {
      return <ProductList/>
    }
    case 'contact': {
      return <Contact/>
    }
  }
}
