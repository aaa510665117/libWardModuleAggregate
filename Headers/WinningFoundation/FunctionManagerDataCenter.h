//
//  FunctionManagerDataCenter.h
//  MobileDoctor
//
//  Created by WinningMac on 2018/5/31.
//  Copyright © 2018年 Ran. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "FunctionManagerRecord.h"

typedef enum : NSUInteger {
    FunctionDataCodeInspectWard = 0,//查房X001
    FunctionDataCodeCaseDiscussion,//病例讨论X002
    FunctionDataCodeComplexQuery,//综合查询X003
    FunctionDataCodeApprove,//审批X005
    FunctionDataCodeApprove_KSS,//抗生素审批X005X001
    FunctionDataCodeApprove_BLGD,//病历归档撤销审批X005X002
    FunctionDataCodeWatermark,//水印X006
    FunctionDataCodeSpeech,//语音X007
    FunctionDataCodeSpeechShortcuts,//语音快捷键X007X001
    FunctionDataCodeConsultation,//移动会诊X008
    FunctionDataCodeNoteVideo,//便签视频
    FunctionDataCodeDeviceInfo,//设备信息
    FunctionDataCodeApprove_BLLR,//病例录入
    FunctionDataCodeBehavior,//医疗行为
    FunctionDataCodeMedicalTong,//医务通
} FunctionDataCode;

@interface FunctionManagerDataCenter : NSObject

+ (instancetype)shareInstance;

/**
 插入数组

 @param datas FunctionManagerRecord 数组
 */
- (BOOL)insertAllFunctionData:(NSArray *)datas ;

/**
 通过codeType判断该模块是否开放

 @param codeType 模块标识
 */
-(BOOL)isOpenWithCode:(FunctionDataCode)codeType;

/**
 查找所有数据
 
 @return FunctionManagerRecord 数组
 */
-(NSArray *)findAllFunctionData;

/**
 删除所有数据
 */
- (BOOL)removeAllRecord ;

@end
