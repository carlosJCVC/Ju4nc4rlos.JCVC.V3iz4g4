import { Career, CareerSchema } from "src/careers/schemas/career.schema";


export class FeatureConfig {
    static mongooseOptions() {
        return [{
            name: Career.name,
            useFactory(...args) {
              const schema = CareerSchema;
              schema.pre('save', function() {
                const uniqueid = Date.now();

                this.slugName = this.name.toLowerCase().split(" ").join("-") + "-" + uniqueid;
              });
      
              return schema;
            },
        }];
    }
}
