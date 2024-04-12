import { Editor, Frame, Element } from '@craftjs/core';
import { Viewport } from '@/components/viewport';
import { Iframe } from '@/components/iframe';
import { ControlPanel } from '@/components/control-panel';
import { TextComponent, TextComponentSettings } from '@/components/text';
import { Toolbox } from '@/components/toolbox';

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Editor resolver={{ TextComponent, TextComponentSettings }}>
        <div className="flex flex-1 relative overflow-hidden">
          <Viewport>
            <Iframe
              title="my frame"
              className="p-4 w-full h-full page-container"
            >
              <Frame>
                <Element is="div" canvas>
                  <TextComponent text="wow 1" />
                  <TextComponent text="wow 2" />
                  <TextComponent text="wow 3" />
                  <TextComponent text="wow 4" />
                  <TextComponent text="wow 5" />
                </Element>
              </Frame>
            </Iframe>
          </Viewport>
          <Toolbox />
          <ControlPanel />
        </div>
      </Editor>
    </section>
  );
}
