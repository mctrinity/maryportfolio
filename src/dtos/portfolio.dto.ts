export class CreateContactDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ProjectFilterDto {
  category?: 'web' | 'mobile' | 'design' | 'backend' | 'fullstack';
  featured?: boolean;
  technology?: string;
}