/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConnectionUpdateManyWithoutRoomsInput } from "./ConnectionUpdateManyWithoutRoomsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { MessageUpdateManyWithoutRoomsInput } from "./MessageUpdateManyWithoutRoomsInput";

@InputType()
class RoomUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ConnectionUpdateManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => ConnectionUpdateManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => ConnectionUpdateManyWithoutRoomsInput, {
    nullable: true,
  })
  connections?: ConnectionUpdateManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hostId?: string | null;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutRoomsInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  roomId?: string | null;
}

export { RoomUpdateInput as RoomUpdateInput };
