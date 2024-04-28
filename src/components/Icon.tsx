import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense, lazy } from "react";

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = lazy(dynamicIconImports[name]);
  return (
    <Suspense>
      <LucideIcon {...props} />
    </Suspense>
  );
}

interface WhatsAppProps {
  size?: number;
}

export function WhatsApp({ size = 20 }: WhatsAppProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 0C4.48615 0 6.4532e-05 4.48609 6.4532e-05 10C6.4532e-05 11.7217 0.444847 13.4148 1.28833 14.9087L0.0161515 19.4478C-0.0255877 19.597 0.0148472 19.757 0.122673 19.8678C0.205717 19.9535 0.31876 20 0.434847 20C0.46963 20 0.504847 19.9957 0.539195 19.9874L5.27659 18.8139C6.72311 19.5904 8.35224 20 10.0001 20C15.514 20 20.0001 15.5139 20.0001 10C20.0001 4.48609 15.514 0 10.0001 0ZM15.0305 13.5287C14.8166 14.1209 13.7905 14.6613 13.2975 14.7339C12.8548 14.7987 12.2948 14.8265 11.6801 14.6335C11.3075 14.5161 10.8292 14.3604 10.2166 14.0991C7.64137 13.0009 5.95963 10.4404 5.83093 10.2713C5.70267 10.1022 4.78267 8.89696 4.78267 7.64956C4.78267 6.40217 5.44572 5.7887 5.68137 5.53478C5.91702 5.28087 6.19485 5.21739 6.36615 5.21739C6.53746 5.21739 6.70833 5.21956 6.85833 5.22652C7.01615 5.23435 7.22789 5.16696 7.43615 5.66174C7.65007 6.16957 8.16354 7.41696 8.22702 7.54435C8.29137 7.6713 8.33398 7.81957 8.24876 7.9887C8.16354 8.15783 8.12093 8.26348 7.99224 8.41174C7.86354 8.56 7.72267 8.74217 7.60702 8.85609C7.47833 8.98261 7.34485 9.11957 7.49441 9.37348C7.64398 9.62739 8.15919 10.4574 8.92267 11.1296C9.90311 11.993 10.7305 12.2609 10.987 12.3878C11.2435 12.5148 11.3935 12.4935 11.5431 12.3243C11.6927 12.1548 12.1848 11.5839 12.3557 11.3304C12.5266 11.077 12.6979 11.1187 12.9335 11.2035C13.1692 11.2878 14.4314 11.9009 14.6879 12.0278C14.9444 12.1548 15.1157 12.2183 15.1801 12.3239C15.2444 12.4291 15.2444 12.937 15.0305 13.5287Z"
        fill="#25D363"
      />
    </svg>
  );
}