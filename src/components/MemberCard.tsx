interface MemberCardProps {
  name: string;
  title: string;
  email?: string;
  image?: string;
  description?: string;
  specialization?: string;
}

export function MemberCard({ name, title, email, image, description, specialization }: MemberCardProps) {
  return (
    <div className="member-card group">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
        {/* Avatar */}
        <div className="mb-4 sm:mb-0 sm:mr-6">
          <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-cream bg-muted shadow-md">
            {image ? (
              <img src={image} alt={name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-secondary text-2xl font-bold text-secondary-foreground">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm font-medium text-accent">{title}</p>
          {specialization && (
            <p className="mt-1 text-sm text-muted-foreground">{specialization}</p>
          )}
          {description && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{description}</p>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              {email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
