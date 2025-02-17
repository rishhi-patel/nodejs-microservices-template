import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db.service';
import { RollsController } from './rolls.controller';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      useFactory: async () => ({
        // You can configure the logger here if needed
        pinoHttp: {
          level: 'info', // Example of setting the log level
          prettyPrint: { colorize: true },
        },
      }),
    }),
  ],
  controllers: [AppController, RollsController],
  providers: [AppService, DbService],
})
export class AppModule {}
