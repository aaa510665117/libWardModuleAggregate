# libWardModuleAggregate

查房
****

|Author|ZY|
|---|---
|E-mail|510665117@qq.com


##  use:     pod 'libWardModuleAggregate'  

shell:  
pod spec create libWardModuleAggregate  
git tag -m"pod spec" "0.0.1"  
git push origin --tags  
pod trunk me(login in)  
pod lib lint --allow-warnings --use-libraries --skip-import-validation 
pod sepc lint --allow-warnings  
pod trunk push libWardModuleAggregate.podspec --allow-warnings --use-libraries --skip-import-validation
