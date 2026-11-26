import { AboutMe } from '../components/AboutMe';
import { PageTemplate } from '../components/PageTemplate';
import { WorkExperiencePart } from '../pageParts/WorkExperiencePart/WorkExperiencePart';
import { ContentContainer } from '../ui/ContentContainer';
import { MetaHead } from '../components/mdx';
import MdxLayout from './MdxLayout';
import { CvExperiencePart } from '../pageParts/WorkExperiencePart/CvExperiencePart';

export default function HomePage() {
  return (
    <MdxLayout>
      <MetaHead title="Обо мне" ogCanonicalUrl="/" />
      <PageTemplate>
        <ContentContainer>
          <AboutMe />
          <CvExperiencePart />
          <WorkExperiencePart />
        </ContentContainer>
      </PageTemplate>
    </MdxLayout>
  );
}
