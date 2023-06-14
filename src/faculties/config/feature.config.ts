import { Faculty, FacultySchema } from '../schemas/faculty.schema';

export class FeatureConfig {
    static mongooseOptions() {
        return [{
            name: Faculty.name,
            useFactory(...args) {
              const schema = FacultySchema;
              schema.pre('save', function() {
                const uniqueid = Date.now();

                this.slugName = this.name.toLowerCase().split(" ").join("-") + "-" + uniqueid;
              });
      
              return schema;
            },
        }];
    }
}
