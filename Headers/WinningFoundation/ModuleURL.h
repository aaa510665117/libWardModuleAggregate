//
//  ModuleURL.h
//  Module1
//
//  Created by WinningMac on 2019/7/15.
//  Copyright © 2019 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

extern NSString *const RouterURLHeader;
extern NSString *const RouterURLModule;

typedef NSString *(^ModuleAction)(NSString * vcName);

@interface ModuleURL : NSObject

ModuleURL * WinningModule ();

//@property (nonatomic,strong) ModuleURL *(^WinningModuleBlock)();
@property (nonatomic,strong,readonly) ModuleAction WinningLogin;
@property (nonatomic,strong,readonly) ModuleAction WinningWorkBench;
@property (nonatomic,strong,readonly) ModuleAction WardModule;
@property (nonatomic,strong,readonly) ModuleAction TeachingModule;
@property (nonatomic,strong,readonly) ModuleAction QueryModule;
@property (nonatomic,strong,readonly) ModuleAction NoteToSeeModule;
@property (nonatomic,strong,readonly) ModuleAction ConsultationModule;
@property (nonatomic,strong,readonly) ModuleAction ApprovalModule;
@property (nonatomic,strong,readonly) ModuleAction MedicalBehaviorModule;
@property (nonatomic,strong,readonly) ModuleAction MedicalTongModule;
@property (nonatomic,strong,readonly) ModuleAction TodayModule;


@end

NS_ASSUME_NONNULL_END
