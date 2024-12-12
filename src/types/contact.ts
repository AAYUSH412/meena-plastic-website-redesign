export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}