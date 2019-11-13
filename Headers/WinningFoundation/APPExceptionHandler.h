//
//  APPExceptionHandler.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/10/30.
//  Copyright © 2017年 Ran. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface APPExceptionHandler : NSObject

///存储常见的信号异常
@property (nonatomic, retain) NSMutableDictionary *exceptionSignal;

void APPHandleException(NSException *exception);

void APPSignalHandler(int signal);

void InstallAPPExceptionHandler(void);


/**
 报错异常奔溃文件

 @param name 异常的名称
 @param reason 异常的原因
 @param Callstacks 异常的信息
 */
+(void)saveExceptionInformationTrack:(NSString *)name withErrorReason:(NSString *)reason withErrorCallstack:(NSArray *)Callstacks;
/**
 删除崩溃文件
 */
+(void)removeExceptionInformation;


@end
