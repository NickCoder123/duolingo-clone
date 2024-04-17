import * as React from "react";

import { Sidebar } from "~/components/sidebar";
import { MobileHeader } from "~/components/mobile-header";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Fragment>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
        <div className="h-full">{children}</div>
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
