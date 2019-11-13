//
//  PatientReportModel.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/8/4.
//  Copyright © 2017年 Ran. All rights reserved.
//

#import "BaseModel.h"

@interface PatientReportModel : BaseModel
/*所有报告
 catalog = 6;
 id = 5043344;
 name = "\U8840\U5e38\U89c4";
 "over_range" = 0;
 "release_time" = "2016-10-07 09:57:32";
 */

/*今日报告
 {"id":"5046384","name":"血常规","catalog":"6","state":1,"over_range":0,"release_time":"2016-10-08 00:38:59","request_time":"","doctor":""}
 */

@property (nonatomic,copy) NSString * name;
@property (nonatomic,copy) NSString * release_time;
@property (nonatomic,copy) NSString * catalog;
@property (nonatomic,copy) NSString * ID;
@property (nonatomic,assign) int  over_range;

@property (nonatomic,copy) NSString * specimen;

//今日检验报告,额外的参数
@property (nonatomic,copy) NSString * request_time;
@property (nonatomic,copy) NSString * doctor;
@property (nonatomic,assign) int  state;

@end
