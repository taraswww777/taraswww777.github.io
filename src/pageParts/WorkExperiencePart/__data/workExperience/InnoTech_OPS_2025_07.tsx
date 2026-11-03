import { WorkExperienceDto } from 'src/types/dto';
import { COMPANIES } from '../constants/compaties';
import { H4 } from '../../../../ui';

export const InnoTech_OPS_2025_07: WorkExperienceDto = {
  ...COMPANIES.InnoTech,
  dateBegin: new Date('2025-07-16').toUTCString(),
  workPosition: "Ведущий разработчик",
  teamName: "ВТБ. Служба Сервисы управления учетно-операционными данными. Группа OPS 4",
  technologiesTags: [
    'Javascript', 'React', 'TypeScript', 'node', 'AdmiralDS', 'StyledComponents',
    'ModuleFederation', 'Сфера+', 'OpenAPI', 'Docker', 'fastify',
    'Webpack', 'Jest', 'JAVA', 'zod'
  ],
  description: (
    <div>
      <H4 className="">Ключевые достижения:</H4>
      <ul className="list-disc space-y-4">
        <li className="flex items-start">
          Внедрил поддержку фронтом моментальных изменений в API контракте.
          Это позволило более оперативно вносить правки в код FE приложений.
          Также команда может стартовать работы раньше чем до них дойдёт BE.
          На сегодня уже 3 сервиса находится на поддержке.
        </li>
        <li className="flex items-start">
          Спроектировал и сформулировал ключевые UX паттерны присущие нашему продукту. Это существенно сократило количество согласований дизайнов.
        </li>
      </ul>
    </div>
  )
}
