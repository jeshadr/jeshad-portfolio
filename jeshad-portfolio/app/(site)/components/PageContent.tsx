"use client";

import ListItem from "@/components/ListItem";
import { BACKEND_TILES, FRONTEND_TILES, SKILL_TILES } from "@/data/skills";
//import PageContent from "./components/PageContent";
/*
grid
            grid-cols-4
            sm:grid-cols-7
            xl:grid-cols-5
            2xl:grid-cols-16
            gap-4
            mt-3
*/

const PageContent = () => {
    return (
        <div>
            <div className="px-6 mt-6">
        <h1 className="text-white text-2xl font-semibold">Programming Languages</h1>
        <div
          className="
            flex
            flex-wrap
            gap-3
            mt-3
          "
        >
          {SKILL_TILES.map((s) => (
            <ListItem
              key={s.name}
              image={s.image}
              name={s.name}
              //href={s.href}
              variant="tile"
            />
          ))}
        </div>
      </div>


      <div className="px-6 mt-10">
        <h1 className="text-white text-2xl font-semibold">Frontend</h1>
        <div
          className="
            flex
            flex-wrap
            gap-3
            mt-3
          "
        >
          {FRONTEND_TILES.map((s) => (
            <ListItem
              key={s.name}
              image={s.image}
              name={s.name}
              href={s.href}
              variant="tile"
            />
          ))}
        </div>
      </div>

      <div className="px-6 mt-10">
        <h1 className="text-white text-2xl font-semibold">Backend</h1>
        <div
          className="
            flex
            flex-wrap
            gap-3
            mt-3
          "
        >
          {BACKEND_TILES.map((s) => (
            <ListItem
              key={s.name}
              image={s.image}
              name={s.name}
              href={s.href}
              variant="tile"
            />
          ))}
        </div>
      </div>
        </div>
    );
}

export default PageContent